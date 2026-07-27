import RealMapOpenTibiaServerEuropeKeywordPage, { generateMetadata } from './real-map-open-tibia-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOpenTibiaServerEuropeKeywordPage />;
}
