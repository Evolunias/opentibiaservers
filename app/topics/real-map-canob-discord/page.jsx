import RealMapCanobDiscordKeywordPage, { generateMetadata } from './real-map-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobDiscordKeywordPage />;
}
