import CurrentSaintsotDiscordKeywordPage, { generateMetadata } from './current-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotDiscordKeywordPage />;
}
