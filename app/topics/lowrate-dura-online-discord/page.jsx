import LowrateDuraOnlineDiscordKeywordPage, { generateMetadata } from './lowrate-dura-online-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDuraOnlineDiscordKeywordPage />;
}
