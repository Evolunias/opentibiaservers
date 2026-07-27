import WithDiscordTibiaraServerKeywordPage, { generateMetadata } from './with-discord-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraServerKeywordPage />;
}
