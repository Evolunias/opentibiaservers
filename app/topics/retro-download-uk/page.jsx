import RetroDownloadUkKeywordPage, { generateMetadata } from './retro-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDownloadUkKeywordPage />;
}
