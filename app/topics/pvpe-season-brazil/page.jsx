import PvpeSeasonBrazilKeywordPage, { generateMetadata } from './pvpe-season-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeSeasonBrazilKeywordPage />;
}
