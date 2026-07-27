import WithDiscordCarlinotDiscordKeywordPage, { generateMetadata } from './with-discord-carlinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotDiscordKeywordPage />;
}
