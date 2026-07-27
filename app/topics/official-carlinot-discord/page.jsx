import OfficialCarlinotDiscordKeywordPage, { generateMetadata } from './official-carlinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotDiscordKeywordPage />;
}
