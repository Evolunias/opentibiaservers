import WithDiscordNilotKeywordPage, { generateMetadata } from './with-discord-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotKeywordPage />;
}
