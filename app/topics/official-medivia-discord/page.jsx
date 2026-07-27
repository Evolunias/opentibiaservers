import OfficialMediviaDiscordKeywordPage, { generateMetadata } from './official-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaDiscordKeywordPage />;
}
