import TopMidhemDownloadKeywordPage, { generateMetadata } from './top-midhem-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemDownloadKeywordPage />;
}
