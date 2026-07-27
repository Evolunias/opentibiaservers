import WithDiscordServerListUkKeywordPage, { generateMetadata } from './with-discord-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerListUkKeywordPage />;
}
