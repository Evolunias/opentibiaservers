import CustomTibiaraDownloadKeywordPage, { generateMetadata } from './custom-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraDownloadKeywordPage />;
}
