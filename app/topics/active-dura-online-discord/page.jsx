import ActiveDuraOnlineDiscordKeywordPage, { generateMetadata } from './active-dura-online-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDuraOnlineDiscordKeywordPage />;
}
