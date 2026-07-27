import TopDuraOnlineDiscordKeywordPage, { generateMetadata } from './top-dura-online-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDuraOnlineDiscordKeywordPage />;
}
