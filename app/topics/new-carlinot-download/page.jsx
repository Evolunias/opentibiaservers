import NewCarlinotDownloadKeywordPage, { generateMetadata } from './new-carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotDownloadKeywordPage />;
}
