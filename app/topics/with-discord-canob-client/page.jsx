import WithDiscordCanobClientKeywordPage, { generateMetadata } from './with-discord-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobClientKeywordPage />;
}
