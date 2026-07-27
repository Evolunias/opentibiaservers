import CustomYurotsDownloadKeywordPage, { generateMetadata } from './custom-yurots-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsDownloadKeywordPage />;
}
