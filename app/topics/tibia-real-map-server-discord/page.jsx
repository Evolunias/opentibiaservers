import TibiaRealMapServerDiscordKeywordPage, { generateMetadata } from './tibia-real-map-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerDiscordKeywordPage />;
}
