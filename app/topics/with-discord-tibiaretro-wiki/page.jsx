import WithDiscordTibiaretroWikiKeywordPage, { generateMetadata } from './with-discord-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroWikiKeywordPage />;
}
