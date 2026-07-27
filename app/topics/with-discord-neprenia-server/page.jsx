import WithDiscordNepreniaServerKeywordPage, { generateMetadata } from './with-discord-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaServerKeywordPage />;
}
