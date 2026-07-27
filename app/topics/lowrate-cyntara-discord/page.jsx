import LowrateCyntaraDiscordKeywordPage, { generateMetadata } from './lowrate-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraDiscordKeywordPage />;
}
