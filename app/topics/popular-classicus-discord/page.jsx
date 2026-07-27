import PopularClassicusDiscordKeywordPage, { generateMetadata } from './popular-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusDiscordKeywordPage />;
}
