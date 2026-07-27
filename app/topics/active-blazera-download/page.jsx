import ActiveBlazeraDownloadKeywordPage, { generateMetadata } from './active-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraDownloadKeywordPage />;
}
