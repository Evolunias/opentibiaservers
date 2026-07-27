import BestMidhemDiscordKeywordPage, { generateMetadata } from './best-midhem-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemDiscordKeywordPage />;
}
