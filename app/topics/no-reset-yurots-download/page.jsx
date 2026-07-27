import NoResetYurotsDownloadKeywordPage, { generateMetadata } from './no-reset-yurots-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsDownloadKeywordPage />;
}
