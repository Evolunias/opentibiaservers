import WithDiscordTibianusWebsiteKeywordPage, { generateMetadata } from './with-discord-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusWebsiteKeywordPage />;
}
