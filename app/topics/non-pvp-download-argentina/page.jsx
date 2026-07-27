import NonPvpDownloadArgentinaKeywordPage, { generateMetadata } from './non-pvp-download-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDownloadArgentinaKeywordPage />;
}
