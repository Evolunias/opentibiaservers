import WithDiscordKasteriaServerKeywordPage, { generateMetadata } from './with-discord-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaServerKeywordPage />;
}
