import HighrateArcaniarlDiscordKeywordPage, { generateMetadata } from './highrate-arcaniarl-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlDiscordKeywordPage />;
}
