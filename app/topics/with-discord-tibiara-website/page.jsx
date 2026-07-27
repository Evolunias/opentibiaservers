import WithDiscordTibiaraWebsiteKeywordPage, { generateMetadata } from './with-discord-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraWebsiteKeywordPage />;
}
