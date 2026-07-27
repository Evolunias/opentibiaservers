import CustomMapTibiaPrivateServerEuropeKeywordPage, { generateMetadata } from './custom-map-tibia-private-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiaPrivateServerEuropeKeywordPage />;
}
