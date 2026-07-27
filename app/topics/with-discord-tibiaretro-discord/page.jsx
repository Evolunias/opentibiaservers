import WithDiscordTibiaretroDiscordKeywordPage, { generateMetadata } from './with-discord-tibiaretro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroDiscordKeywordPage />;
}
