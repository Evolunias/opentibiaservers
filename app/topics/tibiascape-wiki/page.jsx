import TibiascapeWikiKeywordPage, { generateMetadata } from './tibiascape-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeWikiKeywordPage />;
}
