import WithDiscordLumineraClientKeywordPage, { generateMetadata } from './with-discord-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraClientKeywordPage />;
}
