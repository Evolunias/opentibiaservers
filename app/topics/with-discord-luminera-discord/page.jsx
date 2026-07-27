import WithDiscordLumineraDiscordKeywordPage, { generateMetadata } from './with-discord-luminera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraDiscordKeywordPage />;
}
