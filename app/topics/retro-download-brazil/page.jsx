import RetroDownloadBrazilKeywordPage, { generateMetadata } from './retro-download-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDownloadBrazilKeywordPage />;
}
