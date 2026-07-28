import OtclientPage, { generateMetadata } from './otclient';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientPage />;
}
