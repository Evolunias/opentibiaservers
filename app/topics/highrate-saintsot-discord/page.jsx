import HighrateSaintsotDiscordKeywordPage, { generateMetadata } from './highrate-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotDiscordKeywordPage />;
}
