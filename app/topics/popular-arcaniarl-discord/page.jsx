import PopularArcaniarlDiscordKeywordPage, { generateMetadata } from './popular-arcaniarl-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlDiscordKeywordPage />;
}
