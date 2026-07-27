import TopNilotDiscordKeywordPage, { generateMetadata } from './top-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotDiscordKeywordPage />;
}
