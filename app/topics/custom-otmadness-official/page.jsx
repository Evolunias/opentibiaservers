import CustomOtmadnessOfficialKeywordPage, { generateMetadata } from './custom-otmadness-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessOfficialKeywordPage />;
}
