import LowrateBlazeraDownloadKeywordPage, { generateMetadata } from './lowrate-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraDownloadKeywordPage />;
}
