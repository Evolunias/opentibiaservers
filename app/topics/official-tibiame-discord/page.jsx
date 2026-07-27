import OfficialTibiameDiscordKeywordPage, { generateMetadata } from './official-tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameDiscordKeywordPage />;
}
