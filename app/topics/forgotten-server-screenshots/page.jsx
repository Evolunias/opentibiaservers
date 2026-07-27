import ForgottenServerScreenshotsKeywordPage, { generateMetadata } from './forgotten-server-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerScreenshotsKeywordPage />;
}
