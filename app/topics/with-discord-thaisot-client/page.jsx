import WithDiscordThaisotClientKeywordPage, { generateMetadata } from './with-discord-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotClientKeywordPage />;
}
