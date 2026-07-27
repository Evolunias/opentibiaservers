import NewSeasonKasteriaClientKeywordPage, { generateMetadata } from './new-season-kasteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaClientKeywordPage />;
}
