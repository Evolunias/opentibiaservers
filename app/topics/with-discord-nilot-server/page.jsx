import WithDiscordNilotServerKeywordPage, { generateMetadata } from './with-discord-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotServerKeywordPage />;
}
