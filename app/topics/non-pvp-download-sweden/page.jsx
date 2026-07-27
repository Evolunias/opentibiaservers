import NonPvpDownloadSwedenKeywordPage, { generateMetadata } from './non-pvp-download-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDownloadSwedenKeywordPage />;
}
