import WithDiscordImperianicClientKeywordPage, { generateMetadata } from './with-discord-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordImperianicClientKeywordPage />;
}
