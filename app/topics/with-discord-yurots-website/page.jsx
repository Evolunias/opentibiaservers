import WithDiscordYurotsWebsiteKeywordPage, { generateMetadata } from './with-discord-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsWebsiteKeywordPage />;
}
