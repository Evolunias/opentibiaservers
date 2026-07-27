import PopularCanobDiscordKeywordPage, { generateMetadata } from './popular-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobDiscordKeywordPage />;
}
