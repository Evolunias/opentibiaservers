import FreshStartCyntaraDiscordKeywordPage, { generateMetadata } from './fresh-start-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraDiscordKeywordPage />;
}
