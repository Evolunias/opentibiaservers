import NonPvpDownloadMexicoKeywordPage, { generateMetadata } from './non-pvp-download-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDownloadMexicoKeywordPage />;
}
