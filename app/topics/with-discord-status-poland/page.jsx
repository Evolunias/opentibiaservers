import WithDiscordStatusPolandKeywordPage, { generateMetadata } from './with-discord-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordStatusPolandKeywordPage />;
}
