import RealMapNepreniaDiscordKeywordPage, { generateMetadata } from './real-map-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaDiscordKeywordPage />;
}
