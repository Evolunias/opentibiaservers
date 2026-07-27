import FreshStartNilotDiscordKeywordPage, { generateMetadata } from './fresh-start-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotDiscordKeywordPage />;
}
