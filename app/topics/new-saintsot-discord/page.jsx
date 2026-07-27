import NewSaintsotDiscordKeywordPage, { generateMetadata } from './new-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotDiscordKeywordPage />;
}
