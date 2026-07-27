import OtServerListDownloadKeywordPage, { generateMetadata } from './ot-server-list-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListDownloadKeywordPage />;
}
