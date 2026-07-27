import CustomOtmadnessOtKeywordPage, { generateMetadata } from './custom-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessOtKeywordPage />;
}
