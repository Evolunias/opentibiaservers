import FreshStartThaisotDiscordKeywordPage, { generateMetadata } from './fresh-start-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotDiscordKeywordPage />;
}
