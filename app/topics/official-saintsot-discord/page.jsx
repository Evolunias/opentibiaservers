import OfficialSaintsotDiscordKeywordPage, { generateMetadata } from './official-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotDiscordKeywordPage />;
}
