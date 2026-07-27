import OtclientEuropeKeywordPage, { generateMetadata } from './otclient-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientEuropeKeywordPage />;
}
