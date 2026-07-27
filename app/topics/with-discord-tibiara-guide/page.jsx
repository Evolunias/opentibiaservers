import WithDiscordTibiaraGuideKeywordPage, { generateMetadata } from './with-discord-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraGuideKeywordPage />;
}
