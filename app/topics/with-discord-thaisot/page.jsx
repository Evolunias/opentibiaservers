import WithDiscordThaisotKeywordPage, { generateMetadata } from './with-discord-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotKeywordPage />;
}
