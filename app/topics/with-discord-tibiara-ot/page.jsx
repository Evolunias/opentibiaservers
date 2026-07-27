import WithDiscordTibiaraOtKeywordPage, { generateMetadata } from './with-discord-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraOtKeywordPage />;
}
