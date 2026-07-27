import CustomMapTibiaPrivateServerMexicoKeywordPage, { generateMetadata } from './custom-map-tibia-private-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiaPrivateServerMexicoKeywordPage />;
}
