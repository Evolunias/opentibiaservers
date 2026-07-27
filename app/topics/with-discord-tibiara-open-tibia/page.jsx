import WithDiscordTibiaraOpenTibiaKeywordPage, { generateMetadata } from './with-discord-tibiara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraOpenTibiaKeywordPage />;
}
