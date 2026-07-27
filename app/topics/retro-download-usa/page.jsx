import RetroDownloadUsaKeywordPage, { generateMetadata } from './retro-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDownloadUsaKeywordPage />;
}
