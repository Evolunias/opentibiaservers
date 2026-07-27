import CustomOriginaltibiaDownloadKeywordPage, { generateMetadata } from './custom-originaltibia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaDownloadKeywordPage />;
}
