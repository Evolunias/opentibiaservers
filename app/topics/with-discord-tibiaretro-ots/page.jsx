import WithDiscordTibiaretroOtsKeywordPage, { generateMetadata } from './with-discord-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroOtsKeywordPage />;
}
