import WithDiscordCanobWebsiteKeywordPage, { generateMetadata } from './with-discord-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobWebsiteKeywordPage />;
}
