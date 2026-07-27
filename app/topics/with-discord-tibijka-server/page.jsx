import WithDiscordTibijkaServerKeywordPage, { generateMetadata } from './with-discord-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaServerKeywordPage />;
}
