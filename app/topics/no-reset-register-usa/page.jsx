import NoResetRegisterUsaKeywordPage, { generateMetadata } from './no-reset-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRegisterUsaKeywordPage />;
}
