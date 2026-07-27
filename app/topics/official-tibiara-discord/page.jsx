import OfficialTibiaraDiscordKeywordPage, { generateMetadata } from './official-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraDiscordKeywordPage />;
}
