import ForgottenServerRegisterKeywordPage, { generateMetadata } from './forgotten-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerRegisterKeywordPage />;
}
