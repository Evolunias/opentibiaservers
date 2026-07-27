import RetroDownloadNorthAmericaKeywordPage, { generateMetadata } from './retro-download-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDownloadNorthAmericaKeywordPage />;
}
