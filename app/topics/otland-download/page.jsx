import OtlandDownloadKeywordPage, { generateMetadata } from './otland-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandDownloadKeywordPage />;
}
