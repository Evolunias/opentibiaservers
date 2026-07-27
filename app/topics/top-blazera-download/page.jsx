import TopBlazeraDownloadKeywordPage, { generateMetadata } from './top-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraDownloadKeywordPage />;
}
