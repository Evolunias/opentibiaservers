import NewSeasonOxygenotClientKeywordPage, { generateMetadata } from './new-season-oxygenot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotClientKeywordPage />;
}
