import WithDiscordArcaniarlOtsKeywordPage, { generateMetadata } from './with-discord-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlOtsKeywordPage />;
}
