import PopularCarlinotDiscordKeywordPage, { generateMetadata } from './popular-carlinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotDiscordKeywordPage />;
}
