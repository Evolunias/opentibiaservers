import NewSeasonThaisotOtsKeywordPage, { generateMetadata } from './new-season-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotOtsKeywordPage />;
}
