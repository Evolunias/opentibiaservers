import WithDiscordRealestaLoginKeywordPage, { generateMetadata } from './with-discord-realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaLoginKeywordPage />;
}
