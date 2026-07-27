import CustomImperianicDownloadKeywordPage, { generateMetadata } from './custom-imperianic-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicDownloadKeywordPage />;
}
