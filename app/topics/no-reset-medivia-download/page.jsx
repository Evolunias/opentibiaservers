import NoResetMediviaDownloadKeywordPage, { generateMetadata } from './no-reset-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaDownloadKeywordPage />;
}
