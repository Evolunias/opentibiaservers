import NewSeasonAlasteraDiscordKeywordPage, { generateMetadata } from './new-season-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraDiscordKeywordPage />;
}
