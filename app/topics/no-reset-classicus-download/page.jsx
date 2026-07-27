import NoResetClassicusDownloadKeywordPage, { generateMetadata } from './no-reset-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusDownloadKeywordPage />;
}
