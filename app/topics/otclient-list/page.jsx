import OtclientListKeywordPage, { generateMetadata } from './otclient-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientListKeywordPage />;
}
