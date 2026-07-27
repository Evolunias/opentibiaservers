import LowrateSaintsotDownloadKeywordPage, { generateMetadata } from './lowrate-saintsot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotDownloadKeywordPage />;
}
