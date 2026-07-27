import CustomRealeraDownloadKeywordPage, { generateMetadata } from './custom-realera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraDownloadKeywordPage />;
}
