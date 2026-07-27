import CurrentClassicusDownloadKeywordPage, { generateMetadata } from './current-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusDownloadKeywordPage />;
}
