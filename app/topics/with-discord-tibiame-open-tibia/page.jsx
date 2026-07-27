import WithDiscordTibiameOpenTibiaKeywordPage, { generateMetadata } from './with-discord-tibiame-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameOpenTibiaKeywordPage />;
}
