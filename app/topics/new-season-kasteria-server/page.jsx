import NewSeasonKasteriaServerKeywordPage, { generateMetadata } from './new-season-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaServerKeywordPage />;
}
