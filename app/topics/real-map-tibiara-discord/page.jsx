import RealMapTibiaraDiscordKeywordPage, { generateMetadata } from './real-map-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraDiscordKeywordPage />;
}
