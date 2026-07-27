import LowrateMidhemDownloadKeywordPage, { generateMetadata } from './lowrate-midhem-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemDownloadKeywordPage />;
}
