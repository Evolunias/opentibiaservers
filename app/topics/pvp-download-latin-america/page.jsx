import PvpDownloadLatinAmericaKeywordPage, { generateMetadata } from './pvp-download-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDownloadLatinAmericaKeywordPage />;
}
