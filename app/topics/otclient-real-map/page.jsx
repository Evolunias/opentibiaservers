import OtclientRealMapKeywordPage, { generateMetadata } from './otclient-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientRealMapKeywordPage />;
}
