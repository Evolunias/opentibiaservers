import ActiveSaintsotDiscordKeywordPage, { generateMetadata } from './active-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotDiscordKeywordPage />;
}
