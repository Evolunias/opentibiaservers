import BestMidhemDownloadKeywordPage, { generateMetadata } from './best-midhem-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemDownloadKeywordPage />;
}
