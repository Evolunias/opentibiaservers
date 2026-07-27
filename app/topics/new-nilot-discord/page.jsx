import NewNilotDiscordKeywordPage, { generateMetadata } from './new-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotDiscordKeywordPage />;
}
