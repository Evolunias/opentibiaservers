import HighrateNostaltherDownloadKeywordPage, { generateMetadata } from './highrate-nostalther-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherDownloadKeywordPage />;
}
