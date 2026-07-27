import OtclientOldSchoolKeywordPage, { generateMetadata } from './otclient-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientOldSchoolKeywordPage />;
}
