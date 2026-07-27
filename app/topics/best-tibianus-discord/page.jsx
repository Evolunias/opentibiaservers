import BestTibianusDiscordKeywordPage, { generateMetadata } from './best-tibianus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusDiscordKeywordPage />;
}
