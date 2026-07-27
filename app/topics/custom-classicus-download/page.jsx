import CustomClassicusDownloadKeywordPage, { generateMetadata } from './custom-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusDownloadKeywordPage />;
}
