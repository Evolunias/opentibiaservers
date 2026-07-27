import PvpDownloadNorthAmericaKeywordPage, { generateMetadata } from './pvp-download-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDownloadNorthAmericaKeywordPage />;
}
