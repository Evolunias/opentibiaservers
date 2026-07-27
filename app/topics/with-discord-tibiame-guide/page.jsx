import WithDiscordTibiameGuideKeywordPage, { generateMetadata } from './with-discord-tibiame-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameGuideKeywordPage />;
}
