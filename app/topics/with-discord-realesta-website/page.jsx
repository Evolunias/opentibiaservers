import WithDiscordRealestaWebsiteKeywordPage, { generateMetadata } from './with-discord-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaWebsiteKeywordPage />;
}
