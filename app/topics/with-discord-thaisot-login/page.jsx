import WithDiscordThaisotLoginKeywordPage, { generateMetadata } from './with-discord-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotLoginKeywordPage />;
}
