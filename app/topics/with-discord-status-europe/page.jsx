import WithDiscordStatusEuropeKeywordPage, { generateMetadata } from './with-discord-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordStatusEuropeKeywordPage />;
}
