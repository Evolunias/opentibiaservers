import RookgaardTalesDownloadKeywordPage, { generateMetadata } from './rookgaard-tales-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesDownloadKeywordPage />;
}
