import NonPvpDownloadPolandKeywordPage, { generateMetadata } from './non-pvp-download-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDownloadPolandKeywordPage />;
}
