import SaintsotDiscordKeywordPage, { generateMetadata } from './saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotDiscordKeywordPage />;
}
