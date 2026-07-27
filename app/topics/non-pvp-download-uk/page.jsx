import NonPvpDownloadUkKeywordPage, { generateMetadata } from './non-pvp-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDownloadUkKeywordPage />;
}
