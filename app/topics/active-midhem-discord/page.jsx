import ActiveMidhemDiscordKeywordPage, { generateMetadata } from './active-midhem-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemDiscordKeywordPage />;
}
