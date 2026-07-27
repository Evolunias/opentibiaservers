import BestArcaniarlDiscordKeywordPage, { generateMetadata } from './best-arcaniarl-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlDiscordKeywordPage />;
}
