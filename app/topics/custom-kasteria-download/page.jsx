import CustomKasteriaDownloadKeywordPage, { generateMetadata } from './custom-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaDownloadKeywordPage />;
}
