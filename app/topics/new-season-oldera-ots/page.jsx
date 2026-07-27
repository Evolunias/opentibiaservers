import NewSeasonOlderaOtsKeywordPage, { generateMetadata } from './new-season-oldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaOtsKeywordPage />;
}
