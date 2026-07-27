import OfficialMadnessaliveDownloadKeywordPage, { generateMetadata } from './official-madnessalive-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMadnessaliveDownloadKeywordPage />;
}
