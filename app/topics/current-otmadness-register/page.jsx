import CurrentOtmadnessRegisterKeywordPage, { generateMetadata } from './current-otmadness-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessRegisterKeywordPage />;
}
