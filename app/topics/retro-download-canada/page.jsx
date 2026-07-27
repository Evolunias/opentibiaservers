import RetroDownloadCanadaKeywordPage, { generateMetadata } from './retro-download-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDownloadCanadaKeywordPage />;
}
