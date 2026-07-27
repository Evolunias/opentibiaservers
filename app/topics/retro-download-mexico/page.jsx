import RetroDownloadMexicoKeywordPage, { generateMetadata } from './retro-download-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDownloadMexicoKeywordPage />;
}
