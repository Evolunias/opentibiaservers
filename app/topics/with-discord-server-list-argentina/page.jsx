import WithDiscordServerListArgentinaKeywordPage, { generateMetadata } from './with-discord-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerListArgentinaKeywordPage />;
}
