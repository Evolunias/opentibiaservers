import ActiveRookgaardTalesDownloadKeywordPage, { generateMetadata } from './active-rookgaard-tales-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRookgaardTalesDownloadKeywordPage />;
}
