import WithDiscordServerPolandKeywordPage, { generateMetadata } from './with-discord-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerPolandKeywordPage />;
}
