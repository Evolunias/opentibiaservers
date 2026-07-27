import OtclientScreenshotsKeywordPage, { generateMetadata } from './otclient-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientScreenshotsKeywordPage />;
}
