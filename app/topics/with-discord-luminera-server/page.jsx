import WithDiscordLumineraServerKeywordPage, { generateMetadata } from './with-discord-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraServerKeywordPage />;
}
