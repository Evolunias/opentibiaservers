import BestRubinotDiscordKeywordPage, { generateMetadata } from './best-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotDiscordKeywordPage />;
}
