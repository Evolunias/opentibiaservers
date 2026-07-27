import NewSeasonYurotsOtsKeywordPage, { generateMetadata } from './new-season-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsOtsKeywordPage />;
}
