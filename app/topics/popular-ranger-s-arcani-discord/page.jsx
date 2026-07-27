import PopularRangerSArcaniDiscordKeywordPage, { generateMetadata } from './popular-ranger-s-arcani-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRangerSArcaniDiscordKeywordPage />;
}
