import WithDiscordYurotsDiscordKeywordPage, { generateMetadata } from './with-discord-yurots-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsDiscordKeywordPage />;
}
