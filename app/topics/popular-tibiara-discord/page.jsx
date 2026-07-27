import PopularTibiaraDiscordKeywordPage, { generateMetadata } from './popular-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraDiscordKeywordPage />;
}
