import NewSeasonCarlinotClientKeywordPage, { generateMetadata } from './new-season-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotClientKeywordPage />;
}
