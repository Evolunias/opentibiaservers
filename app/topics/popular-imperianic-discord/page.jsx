import PopularImperianicDiscordKeywordPage, { generateMetadata } from './popular-imperianic-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicDiscordKeywordPage />;
}
