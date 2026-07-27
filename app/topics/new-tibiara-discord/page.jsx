import NewTibiaraDiscordKeywordPage, { generateMetadata } from './new-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraDiscordKeywordPage />;
}
