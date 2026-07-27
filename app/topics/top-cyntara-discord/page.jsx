import TopCyntaraDiscordKeywordPage, { generateMetadata } from './top-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraDiscordKeywordPage />;
}
