import RealMapYurotsDiscordKeywordPage, { generateMetadata } from './real-map-yurots-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsDiscordKeywordPage />;
}
