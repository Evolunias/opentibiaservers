import LowrateKasteriaDownloadKeywordPage, { generateMetadata } from './lowrate-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaDownloadKeywordPage />;
}
