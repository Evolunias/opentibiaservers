import TopNtoStarDiscordKeywordPage, { generateMetadata } from './top-nto-star-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNtoStarDiscordKeywordPage />;
}
