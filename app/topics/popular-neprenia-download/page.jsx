import PopularNepreniaDownloadKeywordPage, { generateMetadata } from './popular-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaDownloadKeywordPage />;
}
