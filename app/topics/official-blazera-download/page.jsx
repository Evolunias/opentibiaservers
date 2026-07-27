import OfficialBlazeraDownloadKeywordPage, { generateMetadata } from './official-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraDownloadKeywordPage />;
}
