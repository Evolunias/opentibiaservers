import NewTibiaraDownloadKeywordPage, { generateMetadata } from './new-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraDownloadKeywordPage />;
}
