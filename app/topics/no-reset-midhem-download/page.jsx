import NoResetMidhemDownloadKeywordPage, { generateMetadata } from './no-reset-midhem-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemDownloadKeywordPage />;
}
