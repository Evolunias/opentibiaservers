import ForgottenServerSwedenKeywordPage, { generateMetadata } from './forgotten-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerSwedenKeywordPage />;
}
