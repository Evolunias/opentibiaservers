import PopularNepreniaDiscordKeywordPage, { generateMetadata } from './popular-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaDiscordKeywordPage />;
}
