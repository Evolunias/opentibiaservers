import RealMapBlazeraDiscordKeywordPage, { generateMetadata } from './real-map-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraDiscordKeywordPage />;
}
