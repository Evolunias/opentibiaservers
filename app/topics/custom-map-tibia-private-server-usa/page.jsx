import CustomMapTibiaPrivateServerUsaKeywordPage, { generateMetadata } from './custom-map-tibia-private-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiaPrivateServerUsaKeywordPage />;
}
