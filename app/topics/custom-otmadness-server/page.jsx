import CustomOtmadnessServerKeywordPage, { generateMetadata } from './custom-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessServerKeywordPage />;
}
