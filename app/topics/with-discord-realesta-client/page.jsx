import WithDiscordRealestaClientKeywordPage, { generateMetadata } from './with-discord-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaClientKeywordPage />;
}
