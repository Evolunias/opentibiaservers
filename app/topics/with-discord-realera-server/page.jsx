import WithDiscordRealeraServerKeywordPage, { generateMetadata } from './with-discord-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraServerKeywordPage />;
}
