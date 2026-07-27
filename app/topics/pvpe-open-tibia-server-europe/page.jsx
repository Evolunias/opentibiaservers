import PvpeOpenTibiaServerEuropeKeywordPage, { generateMetadata } from './pvpe-open-tibia-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeOpenTibiaServerEuropeKeywordPage />;
}
