import NewSeasonTibiaraKeywordPage, { generateMetadata } from './new-season-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraKeywordPage />;
}
