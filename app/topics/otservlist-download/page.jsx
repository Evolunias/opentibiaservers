import OtservlistDownloadKeywordPage, { generateMetadata } from './otservlist-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistDownloadKeywordPage />;
}
