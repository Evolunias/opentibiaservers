import WithDiscordServerListCanadaKeywordPage, { generateMetadata } from './with-discord-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerListCanadaKeywordPage />;
}
