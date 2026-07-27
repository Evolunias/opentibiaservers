import WithDiscordTibiaretroOtServerKeywordPage, { generateMetadata } from './with-discord-tibiaretro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroOtServerKeywordPage />;
}
