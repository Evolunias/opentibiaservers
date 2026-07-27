import LowrateThaisotDownloadKeywordPage, { generateMetadata } from './lowrate-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotDownloadKeywordPage />;
}
