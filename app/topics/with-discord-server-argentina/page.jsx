import WithDiscordServerArgentinaKeywordPage, { generateMetadata } from './with-discord-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerArgentinaKeywordPage />;
}
