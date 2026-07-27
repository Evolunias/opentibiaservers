import HighrateTibiascapeWikiKeywordPage, { generateMetadata } from './highrate-tibiascape-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeWikiKeywordPage />;
}
