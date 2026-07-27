import RealMapTibiaretroDiscordKeywordPage, { generateMetadata } from './real-map-tibiaretro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroDiscordKeywordPage />;
}
