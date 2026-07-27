import CurrentOriginaltibiaDownloadKeywordPage, { generateMetadata } from './current-originaltibia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaDownloadKeywordPage />;
}
