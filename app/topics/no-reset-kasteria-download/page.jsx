import NoResetKasteriaDownloadKeywordPage, { generateMetadata } from './no-reset-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaDownloadKeywordPage />;
}
