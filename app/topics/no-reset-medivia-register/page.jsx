import NoResetMediviaRegisterKeywordPage, { generateMetadata } from './no-reset-medivia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaRegisterKeywordPage />;
}
