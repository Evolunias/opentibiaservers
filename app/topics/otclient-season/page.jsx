import OtclientSeasonKeywordPage, { generateMetadata } from './otclient-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientSeasonKeywordPage />;
}
