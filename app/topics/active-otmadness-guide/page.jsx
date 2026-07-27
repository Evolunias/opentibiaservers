import ActiveOtmadnessGuideKeywordPage, { generateMetadata } from './active-otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessGuideKeywordPage />;
}
