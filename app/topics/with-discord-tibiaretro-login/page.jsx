import WithDiscordTibiaretroLoginKeywordPage, { generateMetadata } from './with-discord-tibiaretro-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroLoginKeywordPage />;
}
