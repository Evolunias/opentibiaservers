import BestNostaltherDownloadKeywordPage, { generateMetadata } from './best-nostalther-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNostaltherDownloadKeywordPage />;
}
