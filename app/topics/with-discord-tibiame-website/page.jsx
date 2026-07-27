import WithDiscordTibiameWebsiteKeywordPage, { generateMetadata } from './with-discord-tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameWebsiteKeywordPage />;
}
