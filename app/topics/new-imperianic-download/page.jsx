import NewImperianicDownloadKeywordPage, { generateMetadata } from './new-imperianic-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicDownloadKeywordPage />;
}
