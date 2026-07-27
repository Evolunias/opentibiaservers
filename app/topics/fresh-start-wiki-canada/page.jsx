import FreshStartWikiCanadaKeywordPage, { generateMetadata } from './fresh-start-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiCanadaKeywordPage />;
}
