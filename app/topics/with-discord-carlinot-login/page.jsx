import WithDiscordCarlinotLoginKeywordPage, { generateMetadata } from './with-discord-carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotLoginKeywordPage />;
}
