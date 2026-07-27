import NewSeasonTibiaraClientKeywordPage, { generateMetadata } from './new-season-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraClientKeywordPage />;
}
