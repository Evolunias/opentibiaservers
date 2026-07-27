import LowrateAmeriaDownloadKeywordPage, { generateMetadata } from './lowrate-ameria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaDownloadKeywordPage />;
}
