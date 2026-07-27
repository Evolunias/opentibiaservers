import ForgottenServerHighExpKeywordPage, { generateMetadata } from './forgotten-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerHighExpKeywordPage />;
}
