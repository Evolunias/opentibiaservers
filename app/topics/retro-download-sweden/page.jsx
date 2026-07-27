import RetroDownloadSwedenKeywordPage, { generateMetadata } from './retro-download-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDownloadSwedenKeywordPage />;
}
