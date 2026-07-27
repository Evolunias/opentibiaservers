import CurrentImperianicDownloadKeywordPage, { generateMetadata } from './current-imperianic-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicDownloadKeywordPage />;
}
