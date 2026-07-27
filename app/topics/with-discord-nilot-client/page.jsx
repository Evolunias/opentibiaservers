import WithDiscordNilotClientKeywordPage, { generateMetadata } from './with-discord-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotClientKeywordPage />;
}
