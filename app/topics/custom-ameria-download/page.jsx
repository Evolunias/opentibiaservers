import CustomAmeriaDownloadKeywordPage, { generateMetadata } from './custom-ameria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaDownloadKeywordPage />;
}
