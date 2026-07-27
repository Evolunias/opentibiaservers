import WithDiscordServerListUsaKeywordPage, { generateMetadata } from './with-discord-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerListUsaKeywordPage />;
}
