import WithDiscordServerUsaKeywordPage, { generateMetadata } from './with-discord-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerUsaKeywordPage />;
}
