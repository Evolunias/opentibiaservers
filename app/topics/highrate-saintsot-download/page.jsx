import HighrateSaintsotDownloadKeywordPage, { generateMetadata } from './highrate-saintsot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotDownloadKeywordPage />;
}
