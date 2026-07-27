import OtclientDownloadKeywordPage, { generateMetadata } from './otclient-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientDownloadKeywordPage />;
}
