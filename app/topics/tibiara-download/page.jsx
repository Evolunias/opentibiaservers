import TibiaraDownloadKeywordPage, { generateMetadata } from './tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraDownloadKeywordPage />;
}
