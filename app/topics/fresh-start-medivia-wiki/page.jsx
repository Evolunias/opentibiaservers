import FreshStartMediviaWikiKeywordPage, { generateMetadata } from './fresh-start-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaWikiKeywordPage />;
}
