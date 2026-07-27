import RealMapThaisotDiscordKeywordPage, { generateMetadata } from './real-map-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotDiscordKeywordPage />;
}
