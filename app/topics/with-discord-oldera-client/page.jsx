import WithDiscordOlderaClientKeywordPage, { generateMetadata } from './with-discord-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaClientKeywordPage />;
}
