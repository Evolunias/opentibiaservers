import NewMidhemDiscordKeywordPage, { generateMetadata } from './new-midhem-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemDiscordKeywordPage />;
}
