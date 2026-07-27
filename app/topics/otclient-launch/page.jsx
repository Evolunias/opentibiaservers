import OtclientLaunchKeywordPage, { generateMetadata } from './otclient-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientLaunchKeywordPage />;
}
