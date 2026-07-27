import RealMapOlderaDiscordKeywordPage, { generateMetadata } from './real-map-oldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaDiscordKeywordPage />;
}
