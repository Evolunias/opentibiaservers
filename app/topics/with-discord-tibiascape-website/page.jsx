import WithDiscordTibiascapeWebsiteKeywordPage, { generateMetadata } from './with-discord-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapeWebsiteKeywordPage />;
}
