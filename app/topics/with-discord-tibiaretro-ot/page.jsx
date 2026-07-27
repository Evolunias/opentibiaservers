import WithDiscordTibiaretroOtKeywordPage, { generateMetadata } from './with-discord-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroOtKeywordPage />;
}
