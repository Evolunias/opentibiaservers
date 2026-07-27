import OfficialImperianicDiscordKeywordPage, { generateMetadata } from './official-imperianic-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicDiscordKeywordPage />;
}
