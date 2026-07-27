import WithDiscordThaisotServerKeywordPage, { generateMetadata } from './with-discord-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotServerKeywordPage />;
}
