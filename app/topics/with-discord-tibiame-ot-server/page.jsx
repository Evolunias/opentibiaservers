import WithDiscordTibiameOtServerKeywordPage, { generateMetadata } from './with-discord-tibiame-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameOtServerKeywordPage />;
}
