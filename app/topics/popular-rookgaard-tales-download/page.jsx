import PopularRookgaardTalesDownloadKeywordPage, { generateMetadata } from './popular-rookgaard-tales-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRookgaardTalesDownloadKeywordPage />;
}
