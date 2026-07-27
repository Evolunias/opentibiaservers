import WithDiscordRubinotWebsiteKeywordPage, { generateMetadata } from './with-discord-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotWebsiteKeywordPage />;
}
