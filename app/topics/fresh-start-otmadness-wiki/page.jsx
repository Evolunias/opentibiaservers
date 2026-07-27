import FreshStartOtmadnessWikiKeywordPage, { generateMetadata } from './fresh-start-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOtmadnessWikiKeywordPage />;
}
