import WithDiscordClassicusKeywordPage, { generateMetadata } from './with-discord-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusKeywordPage />;
}
