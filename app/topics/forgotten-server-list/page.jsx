import ForgottenServerListKeywordPage, { generateMetadata } from './forgotten-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerListKeywordPage />;
}
