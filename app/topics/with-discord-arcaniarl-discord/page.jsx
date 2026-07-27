import WithDiscordArcaniarlDiscordKeywordPage, { generateMetadata } from './with-discord-arcaniarl-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlDiscordKeywordPage />;
}
