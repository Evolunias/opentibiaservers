import WithDiscordArcaniarlKeywordPage, { generateMetadata } from './with-discord-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlKeywordPage />;
}
