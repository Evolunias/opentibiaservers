import OtmadnessRegisterKeywordPage, { generateMetadata } from './otmadness-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessRegisterKeywordPage />;
}
