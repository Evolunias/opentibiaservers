import CustomMapTibiaPrivateServerCanadaKeywordPage, { generateMetadata } from './custom-map-tibia-private-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiaPrivateServerCanadaKeywordPage />;
}
