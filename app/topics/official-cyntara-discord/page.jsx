import OfficialCyntaraDiscordKeywordPage, { generateMetadata } from './official-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraDiscordKeywordPage />;
}
