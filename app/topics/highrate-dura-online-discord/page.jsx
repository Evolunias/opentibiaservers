import HighrateDuraOnlineDiscordKeywordPage, { generateMetadata } from './highrate-dura-online-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDuraOnlineDiscordKeywordPage />;
}
