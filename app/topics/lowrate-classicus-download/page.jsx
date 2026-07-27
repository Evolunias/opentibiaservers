import LowrateClassicusDownloadKeywordPage, { generateMetadata } from './lowrate-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusDownloadKeywordPage />;
}
