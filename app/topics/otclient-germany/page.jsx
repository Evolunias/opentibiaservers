import OtclientGermanyKeywordPage, { generateMetadata } from './otclient-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientGermanyKeywordPage />;
}
