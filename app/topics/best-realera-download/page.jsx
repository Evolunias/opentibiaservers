import BestRealeraDownloadKeywordPage, { generateMetadata } from './best-realera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealeraDownloadKeywordPage />;
}
