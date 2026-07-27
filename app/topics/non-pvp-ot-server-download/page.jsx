import NonPvpOtServerDownloadKeywordPage, { generateMetadata } from './non-pvp-ot-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerDownloadKeywordPage />;
}
