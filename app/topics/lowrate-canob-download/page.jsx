import LowrateCanobDownloadKeywordPage, { generateMetadata } from './lowrate-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobDownloadKeywordPage />;
}
