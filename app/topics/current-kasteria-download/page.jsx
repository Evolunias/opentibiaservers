import CurrentKasteriaDownloadKeywordPage, { generateMetadata } from './current-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaDownloadKeywordPage />;
}
