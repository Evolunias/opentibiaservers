import NewSeasonCarlinotServerKeywordPage, { generateMetadata } from './new-season-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotServerKeywordPage />;
}
