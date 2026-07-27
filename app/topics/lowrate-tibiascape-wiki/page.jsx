import LowrateTibiascapeWikiKeywordPage, { generateMetadata } from './lowrate-tibiascape-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapeWikiKeywordPage />;
}
