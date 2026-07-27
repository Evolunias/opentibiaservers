import CustomRealestaDownloadKeywordPage, { generateMetadata } from './custom-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaDownloadKeywordPage />;
}
