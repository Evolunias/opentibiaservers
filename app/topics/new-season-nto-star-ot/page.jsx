import NewSeasonNtoStarOtKeywordPage, { generateMetadata } from './new-season-nto-star-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNtoStarOtKeywordPage />;
}
