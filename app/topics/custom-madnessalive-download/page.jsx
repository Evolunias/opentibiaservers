import CustomMadnessaliveDownloadKeywordPage, { generateMetadata } from './custom-madnessalive-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveDownloadKeywordPage />;
}
