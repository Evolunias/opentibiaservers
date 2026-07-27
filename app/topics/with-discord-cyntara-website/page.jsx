import WithDiscordCyntaraWebsiteKeywordPage, { generateMetadata } from './with-discord-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraWebsiteKeywordPage />;
}
