import CurrentThaisotDiscordKeywordPage, { generateMetadata } from './current-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotDiscordKeywordPage />;
}
