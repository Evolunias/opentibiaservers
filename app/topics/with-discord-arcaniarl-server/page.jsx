import WithDiscordArcaniarlServerKeywordPage, { generateMetadata } from './with-discord-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlServerKeywordPage />;
}
