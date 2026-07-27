import CustomOtmadnessGuideKeywordPage, { generateMetadata } from './custom-otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessGuideKeywordPage />;
}
