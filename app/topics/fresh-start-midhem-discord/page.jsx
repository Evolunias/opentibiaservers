import FreshStartMidhemDiscordKeywordPage, { generateMetadata } from './fresh-start-midhem-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemDiscordKeywordPage />;
}
