import WithDiscordClassicusClientKeywordPage, { generateMetadata } from './with-discord-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusClientKeywordPage />;
}
