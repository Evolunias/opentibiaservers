import ActiveOtmadnessRegisterKeywordPage, { generateMetadata } from './active-otmadness-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessRegisterKeywordPage />;
}
