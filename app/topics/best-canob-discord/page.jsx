import BestCanobDiscordKeywordPage, { generateMetadata } from './best-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobDiscordKeywordPage />;
}
