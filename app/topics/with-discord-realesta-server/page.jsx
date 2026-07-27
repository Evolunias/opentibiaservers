import WithDiscordRealestaServerKeywordPage, { generateMetadata } from './with-discord-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaServerKeywordPage />;
}
