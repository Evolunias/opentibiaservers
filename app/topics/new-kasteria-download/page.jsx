import NewKasteriaDownloadKeywordPage, { generateMetadata } from './new-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaDownloadKeywordPage />;
}
