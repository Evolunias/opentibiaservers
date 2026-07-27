import WithDiscordTibiameOtKeywordPage, { generateMetadata } from './with-discord-tibiame-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameOtKeywordPage />;
}
