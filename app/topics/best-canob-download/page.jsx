import BestCanobDownloadKeywordPage, { generateMetadata } from './best-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobDownloadKeywordPage />;
}
