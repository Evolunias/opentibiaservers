import PopularThaisotDiscordKeywordPage, { generateMetadata } from './popular-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotDiscordKeywordPage />;
}
