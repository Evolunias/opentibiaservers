import ActiveSaintsotDownloadKeywordPage, { generateMetadata } from './active-saintsot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotDownloadKeywordPage />;
}
