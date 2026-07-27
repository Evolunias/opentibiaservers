import WithDiscordStatusMexicoKeywordPage, { generateMetadata } from './with-discord-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordStatusMexicoKeywordPage />;
}
