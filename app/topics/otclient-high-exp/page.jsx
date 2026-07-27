import OtclientHighExpKeywordPage, { generateMetadata } from './otclient-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientHighExpKeywordPage />;
}
