import WithDiscordLumineraWebsiteKeywordPage, { generateMetadata } from './with-discord-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraWebsiteKeywordPage />;
}
