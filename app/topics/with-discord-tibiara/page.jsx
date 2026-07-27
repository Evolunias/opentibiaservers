import WithDiscordTibiaraKeywordPage, { generateMetadata } from './with-discord-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraKeywordPage />;
}
