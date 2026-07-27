import ArcaniarlSeasonKeywordPage, { generateMetadata } from './arcaniarl-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlSeasonKeywordPage />;
}
