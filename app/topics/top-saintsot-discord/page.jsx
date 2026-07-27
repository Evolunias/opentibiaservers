import TopSaintsotDiscordKeywordPage, { generateMetadata } from './top-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSaintsotDiscordKeywordPage />;
}
