import WithDiscordTibiaretroWebsiteKeywordPage, { generateMetadata } from './with-discord-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroWebsiteKeywordPage />;
}
