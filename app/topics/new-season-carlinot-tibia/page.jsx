import NewSeasonCarlinotTibiaKeywordPage, { generateMetadata } from './new-season-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotTibiaKeywordPage />;
}
