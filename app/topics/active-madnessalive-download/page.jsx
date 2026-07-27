import ActiveMadnessaliveDownloadKeywordPage, { generateMetadata } from './active-madnessalive-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMadnessaliveDownloadKeywordPage />;
}
