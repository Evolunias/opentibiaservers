import WithDiscordNilotWebsiteKeywordPage, { generateMetadata } from './with-discord-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotWebsiteKeywordPage />;
}
