import WithDiscordTibiaretroKeywordPage, { generateMetadata } from './with-discord-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroKeywordPage />;
}
