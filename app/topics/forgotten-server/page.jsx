import ForgottenServerKeywordPage, { generateMetadata } from './forgotten-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerKeywordPage />;
}
