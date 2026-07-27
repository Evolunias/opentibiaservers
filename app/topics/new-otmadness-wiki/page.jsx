import NewOtmadnessWikiKeywordPage, { generateMetadata } from './new-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessWikiKeywordPage />;
}
