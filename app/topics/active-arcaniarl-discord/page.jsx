import ActiveArcaniarlDiscordKeywordPage, { generateMetadata } from './active-arcaniarl-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlDiscordKeywordPage />;
}
