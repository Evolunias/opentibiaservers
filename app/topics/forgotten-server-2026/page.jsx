import ForgottenServer2026KeywordPage, { generateMetadata } from './forgotten-server-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServer2026KeywordPage />;
}
