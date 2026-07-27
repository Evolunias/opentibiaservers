import BestTibiaraDiscordKeywordPage, { generateMetadata } from './best-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraDiscordKeywordPage />;
}
