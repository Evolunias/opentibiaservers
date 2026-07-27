import ArcaniarlDiscordKeywordPage, { generateMetadata } from './arcaniarl-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlDiscordKeywordPage />;
}
