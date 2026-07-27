import NewCyntaraDiscordKeywordPage, { generateMetadata } from './new-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraDiscordKeywordPage />;
}
