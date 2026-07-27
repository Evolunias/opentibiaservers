import BestCyntaraDiscordKeywordPage, { generateMetadata } from './best-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraDiscordKeywordPage />;
}
