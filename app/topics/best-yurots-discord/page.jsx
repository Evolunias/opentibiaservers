import BestYurotsDiscordKeywordPage, { generateMetadata } from './best-yurots-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsDiscordKeywordPage />;
}
