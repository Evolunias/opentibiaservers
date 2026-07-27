import NewSeasonNtoStarOtsKeywordPage, { generateMetadata } from './new-season-nto-star-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNtoStarOtsKeywordPage />;
}
