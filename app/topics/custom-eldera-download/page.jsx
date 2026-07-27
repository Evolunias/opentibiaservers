import CustomElderaDownloadKeywordPage, { generateMetadata } from './custom-eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaDownloadKeywordPage />;
}
