import WithDiscordRealeraWebsiteKeywordPage, { generateMetadata } from './with-discord-realera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraWebsiteKeywordPage />;
}
