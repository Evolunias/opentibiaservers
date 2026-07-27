import WithDiscordArcaniarlClientKeywordPage, { generateMetadata } from './with-discord-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlClientKeywordPage />;
}
