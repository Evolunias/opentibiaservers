import WithDiscordOxygenotClientKeywordPage, { generateMetadata } from './with-discord-oxygenot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOxygenotClientKeywordPage />;
}
