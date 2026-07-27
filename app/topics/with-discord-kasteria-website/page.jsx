import WithDiscordKasteriaWebsiteKeywordPage, { generateMetadata } from './with-discord-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaWebsiteKeywordPage />;
}
