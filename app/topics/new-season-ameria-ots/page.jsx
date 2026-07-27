import NewSeasonAmeriaOtsKeywordPage, { generateMetadata } from './new-season-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaOtsKeywordPage />;
}
