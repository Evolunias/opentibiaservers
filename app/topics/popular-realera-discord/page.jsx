import PopularRealeraDiscordKeywordPage, { generateMetadata } from './popular-realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraDiscordKeywordPage />;
}
