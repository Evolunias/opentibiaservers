import PopularAmeriaDiscordKeywordPage, { generateMetadata } from './popular-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaDiscordKeywordPage />;
}
