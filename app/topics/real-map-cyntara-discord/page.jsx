import RealMapCyntaraDiscordKeywordPage, { generateMetadata } from './real-map-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCyntaraDiscordKeywordPage />;
}
