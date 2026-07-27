import NewSeasonOxygenotTibiaKeywordPage, { generateMetadata } from './new-season-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotTibiaKeywordPage />;
}
