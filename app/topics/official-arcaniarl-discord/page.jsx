import OfficialArcaniarlDiscordKeywordPage, { generateMetadata } from './official-arcaniarl-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlDiscordKeywordPage />;
}
