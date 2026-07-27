import OtclientClientKeywordPage, { generateMetadata } from './otclient-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientClientKeywordPage />;
}
