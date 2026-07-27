import WithDiscordImperianicServerKeywordPage, { generateMetadata } from './with-discord-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordImperianicServerKeywordPage />;
}
