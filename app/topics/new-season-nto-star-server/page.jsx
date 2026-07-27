import NewSeasonNtoStarServerKeywordPage, { generateMetadata } from './new-season-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNtoStarServerKeywordPage />;
}
