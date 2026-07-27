import PopularRealestaDownloadKeywordPage, { generateMetadata } from './popular-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaDownloadKeywordPage />;
}
