import NewMidhemDownloadKeywordPage, { generateMetadata } from './new-midhem-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemDownloadKeywordPage />;
}
