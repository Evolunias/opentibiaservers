import CustomMapTibiaPrivateServerSwedenKeywordPage, { generateMetadata } from './custom-map-tibia-private-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiaPrivateServerSwedenKeywordPage />;
}
