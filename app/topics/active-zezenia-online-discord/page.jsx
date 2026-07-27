import ActiveZezeniaOnlineDiscordKeywordPage, { generateMetadata } from './active-zezenia-online-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZezeniaOnlineDiscordKeywordPage />;
}
