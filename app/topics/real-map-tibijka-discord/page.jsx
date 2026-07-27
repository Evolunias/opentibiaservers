import RealMapTibijkaDiscordKeywordPage, { generateMetadata } from './real-map-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaDiscordKeywordPage />;
}
