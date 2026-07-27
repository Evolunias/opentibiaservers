import WithDiscordThaisotWebsiteKeywordPage, { generateMetadata } from './with-discord-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotWebsiteKeywordPage />;
}
