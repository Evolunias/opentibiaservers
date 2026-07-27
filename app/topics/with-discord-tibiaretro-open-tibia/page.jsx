import WithDiscordTibiaretroOpenTibiaKeywordPage, { generateMetadata } from './with-discord-tibiaretro-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroOpenTibiaKeywordPage />;
}
