import WithDiscordServerListBrazilKeywordPage, { generateMetadata } from './with-discord-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerListBrazilKeywordPage />;
}
