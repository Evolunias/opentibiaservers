import OfficialSabrehavenDiscordKeywordPage, { generateMetadata } from './official-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenDiscordKeywordPage />;
}
