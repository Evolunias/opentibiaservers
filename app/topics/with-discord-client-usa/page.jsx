import WithDiscordClientUsaKeywordPage, { generateMetadata } from './with-discord-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClientUsaKeywordPage />;
}
