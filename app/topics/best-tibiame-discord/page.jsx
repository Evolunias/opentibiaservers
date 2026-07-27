import BestTibiameDiscordKeywordPage, { generateMetadata } from './best-tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameDiscordKeywordPage />;
}
