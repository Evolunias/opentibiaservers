import NilotDiscordKeywordPage, { generateMetadata } from './nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotDiscordKeywordPage />;
}
