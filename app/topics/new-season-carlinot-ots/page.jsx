import NewSeasonCarlinotOtsKeywordPage, { generateMetadata } from './new-season-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotOtsKeywordPage />;
}
