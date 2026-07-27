import TopKasteriaDownloadKeywordPage, { generateMetadata } from './top-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaDownloadKeywordPage />;
}
