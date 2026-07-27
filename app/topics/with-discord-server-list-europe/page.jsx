import WithDiscordServerListEuropeKeywordPage, { generateMetadata } from './with-discord-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerListEuropeKeywordPage />;
}
