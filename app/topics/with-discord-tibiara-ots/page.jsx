import WithDiscordTibiaraOtsKeywordPage, { generateMetadata } from './with-discord-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraOtsKeywordPage />;
}
