import WithDiscordCanobLoginKeywordPage, { generateMetadata } from './with-discord-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobLoginKeywordPage />;
}
