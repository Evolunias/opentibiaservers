import LowrateNilotDownloadKeywordPage, { generateMetadata } from './lowrate-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotDownloadKeywordPage />;
}
