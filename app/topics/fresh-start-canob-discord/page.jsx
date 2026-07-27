import FreshStartCanobDiscordKeywordPage, { generateMetadata } from './fresh-start-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobDiscordKeywordPage />;
}
