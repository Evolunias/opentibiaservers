import OtclientRegisterKeywordPage, { generateMetadata } from './otclient-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientRegisterKeywordPage />;
}
