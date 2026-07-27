import WithDiscordTibiameTibiaKeywordPage, { generateMetadata } from './with-discord-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameTibiaKeywordPage />;
}
