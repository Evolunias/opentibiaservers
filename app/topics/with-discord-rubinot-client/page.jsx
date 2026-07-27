import WithDiscordRubinotClientKeywordPage, { generateMetadata } from './with-discord-rubinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotClientKeywordPage />;
}
