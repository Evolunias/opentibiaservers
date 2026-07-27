import PvpDownloadUkKeywordPage, { generateMetadata } from './pvp-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDownloadUkKeywordPage />;
}
