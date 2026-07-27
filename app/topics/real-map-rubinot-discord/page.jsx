import RealMapRubinotDiscordKeywordPage, { generateMetadata } from './real-map-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotDiscordKeywordPage />;
}
