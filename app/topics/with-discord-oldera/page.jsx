import WithDiscordOlderaKeywordPage, { generateMetadata } from './with-discord-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaKeywordPage />;
}
