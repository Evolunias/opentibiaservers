import CustomTibianusDownloadKeywordPage, { generateMetadata } from './custom-tibianus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibianusDownloadKeywordPage />;
}
