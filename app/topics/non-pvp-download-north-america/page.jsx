import NonPvpDownloadNorthAmericaKeywordPage, { generateMetadata } from './non-pvp-download-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDownloadNorthAmericaKeywordPage />;
}
