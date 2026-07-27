import NewRealestaDownloadKeywordPage, { generateMetadata } from './new-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealestaDownloadKeywordPage />;
}
