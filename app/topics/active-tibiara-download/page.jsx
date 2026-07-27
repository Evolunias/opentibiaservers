import ActiveTibiaraDownloadKeywordPage, { generateMetadata } from './active-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraDownloadKeywordPage />;
}
