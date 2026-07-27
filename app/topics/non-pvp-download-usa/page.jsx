import NonPvpDownloadUsaKeywordPage, { generateMetadata } from './non-pvp-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDownloadUsaKeywordPage />;
}
