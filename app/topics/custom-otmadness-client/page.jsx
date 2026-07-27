import CustomOtmadnessClientKeywordPage, { generateMetadata } from './custom-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessClientKeywordPage />;
}
