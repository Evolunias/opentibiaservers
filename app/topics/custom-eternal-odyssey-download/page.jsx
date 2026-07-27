import CustomEternalOdysseyDownloadKeywordPage, { generateMetadata } from './custom-eternal-odyssey-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEternalOdysseyDownloadKeywordPage />;
}
