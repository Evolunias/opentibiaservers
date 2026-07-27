import NewSeasonNtoStarLoginKeywordPage, { generateMetadata } from './new-season-nto-star-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNtoStarLoginKeywordPage />;
}
