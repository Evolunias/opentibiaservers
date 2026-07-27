import OfficialNilotDiscordKeywordPage, { generateMetadata } from './official-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotDiscordKeywordPage />;
}
