import RetroDownloadLatinAmericaKeywordPage, { generateMetadata } from './retro-download-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDownloadLatinAmericaKeywordPage />;
}
