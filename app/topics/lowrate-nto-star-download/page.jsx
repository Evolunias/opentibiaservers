import LowrateNtoStarDownloadKeywordPage, { generateMetadata } from './lowrate-nto-star-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNtoStarDownloadKeywordPage />;
}
