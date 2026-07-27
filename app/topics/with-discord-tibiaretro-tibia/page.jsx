import WithDiscordTibiaretroTibiaKeywordPage, { generateMetadata } from './with-discord-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroTibiaKeywordPage />;
}
