import WithDiscordImperianicWebsiteKeywordPage, { generateMetadata } from './with-discord-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordImperianicWebsiteKeywordPage />;
}
