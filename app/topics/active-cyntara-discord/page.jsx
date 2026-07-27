import ActiveCyntaraDiscordKeywordPage, { generateMetadata } from './active-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraDiscordKeywordPage />;
}
