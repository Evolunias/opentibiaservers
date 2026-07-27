import BestThaisotDiscordKeywordPage, { generateMetadata } from './best-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotDiscordKeywordPage />;
}
