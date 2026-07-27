import CustomRookgaardTalesDownloadKeywordPage, { generateMetadata } from './custom-rookgaard-tales-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRookgaardTalesDownloadKeywordPage />;
}
