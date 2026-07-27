import NewSeasonUnlineOtsKeywordPage, { generateMetadata } from './new-season-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineOtsKeywordPage />;
}
