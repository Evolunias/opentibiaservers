import PvpDownloadBrazilKeywordPage, { generateMetadata } from './pvp-download-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDownloadBrazilKeywordPage />;
}
