import LowrateArcaniarlDiscordKeywordPage, { generateMetadata } from './lowrate-arcaniarl-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlDiscordKeywordPage />;
}
