import NoResetOtmadnessRegisterKeywordPage, { generateMetadata } from './no-reset-otmadness-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessRegisterKeywordPage />;
}
