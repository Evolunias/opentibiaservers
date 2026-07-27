import NonPvpDownloadGermanyKeywordPage, { generateMetadata } from './non-pvp-download-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDownloadGermanyKeywordPage />;
}
