import WithDiscordClassicusWebsiteKeywordPage, { generateMetadata } from './with-discord-classicus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusWebsiteKeywordPage />;
}
