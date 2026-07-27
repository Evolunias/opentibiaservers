import CustomRubinotDownloadKeywordPage, { generateMetadata } from './custom-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotDownloadKeywordPage />;
}
