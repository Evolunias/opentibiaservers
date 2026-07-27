import WithDiscordRealeraKeywordPage, { generateMetadata } from './with-discord-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraKeywordPage />;
}
