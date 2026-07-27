import FreshStartTibiaraDownloadKeywordPage, { generateMetadata } from './fresh-start-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraDownloadKeywordPage />;
}
