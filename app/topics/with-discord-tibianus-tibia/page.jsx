import WithDiscordTibianusTibiaKeywordPage, { generateMetadata } from './with-discord-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusTibiaKeywordPage />;
}
