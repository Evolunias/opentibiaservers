import ForgottenServerDownloadKeywordPage, { generateMetadata } from './forgotten-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerDownloadKeywordPage />;
}
