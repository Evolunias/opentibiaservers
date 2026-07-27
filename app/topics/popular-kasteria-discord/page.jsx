import PopularKasteriaDiscordKeywordPage, { generateMetadata } from './popular-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaDiscordKeywordPage />;
}
