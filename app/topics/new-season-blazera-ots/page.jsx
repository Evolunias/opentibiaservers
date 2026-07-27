import NewSeasonBlazeraOtsKeywordPage, { generateMetadata } from './new-season-blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraOtsKeywordPage />;
}
