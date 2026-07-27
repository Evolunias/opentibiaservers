import RealMapElderaDiscordKeywordPage, { generateMetadata } from './real-map-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaDiscordKeywordPage />;
}
