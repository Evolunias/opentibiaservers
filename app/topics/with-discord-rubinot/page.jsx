import WithDiscordRubinotKeywordPage, { generateMetadata } from './with-discord-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotKeywordPage />;
}
