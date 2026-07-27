import TheForgottenServerDownloadKeywordPage, { generateMetadata } from './the-forgotten-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerDownloadKeywordPage />;
}
