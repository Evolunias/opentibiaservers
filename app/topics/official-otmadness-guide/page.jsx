import OfficialOtmadnessGuideKeywordPage, { generateMetadata } from './official-otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOtmadnessGuideKeywordPage />;
}
