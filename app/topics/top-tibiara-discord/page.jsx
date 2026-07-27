import TopTibiaraDiscordKeywordPage, { generateMetadata } from './top-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraDiscordKeywordPage />;
}
