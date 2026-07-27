import AnticaWikiKeywordPage, { generateMetadata } from './antica-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaWikiKeywordPage />;
}
