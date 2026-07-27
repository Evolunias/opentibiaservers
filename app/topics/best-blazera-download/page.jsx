import BestBlazeraDownloadKeywordPage, { generateMetadata } from './best-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraDownloadKeywordPage />;
}
