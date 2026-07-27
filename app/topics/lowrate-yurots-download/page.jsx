import LowrateYurotsDownloadKeywordPage, { generateMetadata } from './lowrate-yurots-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsDownloadKeywordPage />;
}
