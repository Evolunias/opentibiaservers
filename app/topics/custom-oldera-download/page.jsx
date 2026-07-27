import CustomOlderaDownloadKeywordPage, { generateMetadata } from './custom-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaDownloadKeywordPage />;
}
