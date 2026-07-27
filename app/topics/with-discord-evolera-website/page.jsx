import WithDiscordEvoleraWebsiteKeywordPage, { generateMetadata } from './with-discord-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraWebsiteKeywordPage />;
}
