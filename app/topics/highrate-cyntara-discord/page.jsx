import HighrateCyntaraDiscordKeywordPage, { generateMetadata } from './highrate-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCyntaraDiscordKeywordPage />;
}
