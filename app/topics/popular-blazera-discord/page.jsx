import PopularBlazeraDiscordKeywordPage, { generateMetadata } from './popular-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraDiscordKeywordPage />;
}
