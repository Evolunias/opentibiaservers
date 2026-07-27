import WithDiscordServerListPolandKeywordPage, { generateMetadata } from './with-discord-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerListPolandKeywordPage />;
}
