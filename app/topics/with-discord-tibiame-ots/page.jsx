import WithDiscordTibiameOtsKeywordPage, { generateMetadata } from './with-discord-tibiame-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameOtsKeywordPage />;
}
