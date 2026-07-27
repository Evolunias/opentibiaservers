import NonPvpDownloadEuropeKeywordPage, { generateMetadata } from './non-pvp-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDownloadEuropeKeywordPage />;
}
