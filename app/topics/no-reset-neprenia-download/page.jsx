import NoResetNepreniaDownloadKeywordPage, { generateMetadata } from './no-reset-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaDownloadKeywordPage />;
}
