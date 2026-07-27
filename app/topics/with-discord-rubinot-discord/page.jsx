import WithDiscordRubinotDiscordKeywordPage, { generateMetadata } from './with-discord-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotDiscordKeywordPage />;
}
