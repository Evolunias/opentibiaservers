import NewMediviaDownloadKeywordPage, { generateMetadata } from './new-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaDownloadKeywordPage />;
}
