import WithDiscordTibiaretroClientKeywordPage, { generateMetadata } from './with-discord-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroClientKeywordPage />;
}
