import NewSeasonTibiaraOtsKeywordPage, { generateMetadata } from './new-season-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraOtsKeywordPage />;
}
