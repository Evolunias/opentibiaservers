import LowrateOtmadnessGuideKeywordPage, { generateMetadata } from './lowrate-otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessGuideKeywordPage />;
}
