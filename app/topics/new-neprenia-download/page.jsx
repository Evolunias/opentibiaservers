import NewNepreniaDownloadKeywordPage, { generateMetadata } from './new-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaDownloadKeywordPage />;
}
