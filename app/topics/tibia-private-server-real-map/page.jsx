import TibiaPrivateServerRealMapKeywordPage, { generateMetadata } from './tibia-private-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerRealMapKeywordPage />;
}
