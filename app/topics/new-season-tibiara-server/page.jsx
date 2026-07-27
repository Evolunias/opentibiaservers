import NewSeasonTibiaraServerKeywordPage, { generateMetadata } from './new-season-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraServerKeywordPage />;
}
