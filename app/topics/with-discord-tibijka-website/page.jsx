import WithDiscordTibijkaWebsiteKeywordPage, { generateMetadata } from './with-discord-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaWebsiteKeywordPage />;
}
