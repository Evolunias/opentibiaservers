import CustomOtmadnessWebsiteKeywordPage, { generateMetadata } from './custom-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessWebsiteKeywordPage />;
}
