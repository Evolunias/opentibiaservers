import HighrateBlazeraDownloadKeywordPage, { generateMetadata } from './highrate-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraDownloadKeywordPage />;
}
