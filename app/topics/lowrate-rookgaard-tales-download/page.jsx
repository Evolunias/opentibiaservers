import LowrateRookgaardTalesDownloadKeywordPage, { generateMetadata } from './lowrate-rookgaard-tales-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRookgaardTalesDownloadKeywordPage />;
}
