import OfficialRealeraDownloadKeywordPage, { generateMetadata } from './official-realera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraDownloadKeywordPage />;
}
