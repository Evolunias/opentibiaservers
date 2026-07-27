import TopTibijkaDiscordKeywordPage, { generateMetadata } from './top-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaDiscordKeywordPage />;
}
