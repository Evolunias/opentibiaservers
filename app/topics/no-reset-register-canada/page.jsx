import NoResetRegisterCanadaKeywordPage, { generateMetadata } from './no-reset-register-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRegisterCanadaKeywordPage />;
}
