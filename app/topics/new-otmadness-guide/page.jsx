import NewOtmadnessGuideKeywordPage, { generateMetadata } from './new-otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessGuideKeywordPage />;
}
