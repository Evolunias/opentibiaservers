import NewSeasonOxygenotOtsKeywordPage, { generateMetadata } from './new-season-oxygenot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotOtsKeywordPage />;
}
