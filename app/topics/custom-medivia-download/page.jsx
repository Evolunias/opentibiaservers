import CustomMediviaDownloadKeywordPage, { generateMetadata } from './custom-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaDownloadKeywordPage />;
}
