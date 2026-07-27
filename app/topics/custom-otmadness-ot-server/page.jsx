import CustomOtmadnessOtServerKeywordPage, { generateMetadata } from './custom-otmadness-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessOtServerKeywordPage />;
}
