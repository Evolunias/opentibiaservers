import PopularImperianicDownloadKeywordPage, { generateMetadata } from './popular-imperianic-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicDownloadKeywordPage />;
}
