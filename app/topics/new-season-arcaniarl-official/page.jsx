import NewSeasonArcaniarlOfficialKeywordPage, { generateMetadata } from './new-season-arcaniarl-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlOfficialKeywordPage />;
}
