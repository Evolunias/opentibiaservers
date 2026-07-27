import WithDiscordNilotLoginKeywordPage, { generateMetadata } from './with-discord-nilot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotLoginKeywordPage />;
}
