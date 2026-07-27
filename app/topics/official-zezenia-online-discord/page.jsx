import OfficialZezeniaOnlineDiscordKeywordPage, { generateMetadata } from './official-zezenia-online-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZezeniaOnlineDiscordKeywordPage />;
}
