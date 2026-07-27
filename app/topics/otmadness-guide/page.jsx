import OtmadnessGuideKeywordPage, { generateMetadata } from './otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessGuideKeywordPage />;
}
