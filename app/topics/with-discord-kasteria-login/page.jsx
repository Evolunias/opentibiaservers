import WithDiscordKasteriaLoginKeywordPage, { generateMetadata } from './with-discord-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaLoginKeywordPage />;
}
