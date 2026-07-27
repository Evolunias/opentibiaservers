import OfficialMiracleDiscordKeywordPage, { generateMetadata } from './official-miracle-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleDiscordKeywordPage />;
}
