import OriginaltibiaDownloadKeywordPage, { generateMetadata } from './originaltibia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaDownloadKeywordPage />;
}
