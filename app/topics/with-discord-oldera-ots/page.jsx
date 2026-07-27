import WithDiscordOlderaOtsKeywordPage, { generateMetadata } from './with-discord-oldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaOtsKeywordPage />;
}
