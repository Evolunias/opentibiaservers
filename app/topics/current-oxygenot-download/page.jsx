import CurrentOxygenotDownloadKeywordPage, { generateMetadata } from './current-oxygenot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOxygenotDownloadKeywordPage />;
}
