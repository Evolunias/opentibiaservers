import LowrateSaintsotDiscordKeywordPage, { generateMetadata } from './lowrate-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotDiscordKeywordPage />;
}
