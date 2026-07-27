import NonPvpDownloadCanadaKeywordPage, { generateMetadata } from './non-pvp-download-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDownloadCanadaKeywordPage />;
}
