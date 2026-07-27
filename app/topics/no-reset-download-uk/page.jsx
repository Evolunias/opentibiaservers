import NoResetDownloadUkKeywordPage, { generateMetadata } from './no-reset-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDownloadUkKeywordPage />;
}
