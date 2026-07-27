import HighrateRealeraDownloadKeywordPage, { generateMetadata } from './highrate-realera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraDownloadKeywordPage />;
}
