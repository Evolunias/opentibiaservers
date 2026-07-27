import HighrateNtoStarDownloadKeywordPage, { generateMetadata } from './highrate-nto-star-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNtoStarDownloadKeywordPage />;
}
