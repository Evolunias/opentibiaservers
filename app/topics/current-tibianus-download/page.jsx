import CurrentTibianusDownloadKeywordPage, { generateMetadata } from './current-tibianus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusDownloadKeywordPage />;
}
