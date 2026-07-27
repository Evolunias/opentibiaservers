import LowrateNostaltherDownloadKeywordPage, { generateMetadata } from './lowrate-nostalther-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherDownloadKeywordPage />;
}
