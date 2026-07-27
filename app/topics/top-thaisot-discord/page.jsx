import TopThaisotDiscordKeywordPage, { generateMetadata } from './top-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotDiscordKeywordPage />;
}
