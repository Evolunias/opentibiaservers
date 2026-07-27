import WithDiscordStatusSwedenKeywordPage, { generateMetadata } from './with-discord-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordStatusSwedenKeywordPage />;
}
