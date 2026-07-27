import BestTibiascapeDiscordKeywordPage, { generateMetadata } from './best-tibiascape-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeDiscordKeywordPage />;
}
