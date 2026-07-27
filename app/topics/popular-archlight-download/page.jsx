import PopularArchlightDownloadKeywordPage, { generateMetadata } from './popular-archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightDownloadKeywordPage />;
}
