import PopularSaintsotDiscordKeywordPage, { generateMetadata } from './popular-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotDiscordKeywordPage />;
}
