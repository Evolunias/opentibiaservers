import ActiveTibiameDiscordKeywordPage, { generateMetadata } from './active-tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameDiscordKeywordPage />;
}
