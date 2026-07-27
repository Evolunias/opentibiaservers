import WithDiscordUnlineWebsiteKeywordPage, { generateMetadata } from './with-discord-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineWebsiteKeywordPage />;
}
