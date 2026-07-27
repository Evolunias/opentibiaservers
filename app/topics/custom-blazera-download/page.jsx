import CustomBlazeraDownloadKeywordPage, { generateMetadata } from './custom-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBlazeraDownloadKeywordPage />;
}
