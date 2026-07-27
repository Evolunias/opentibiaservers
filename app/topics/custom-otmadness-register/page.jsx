import CustomOtmadnessRegisterKeywordPage, { generateMetadata } from './custom-otmadness-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessRegisterKeywordPage />;
}
