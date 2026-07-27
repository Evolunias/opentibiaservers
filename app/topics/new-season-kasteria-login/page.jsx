import NewSeasonKasteriaLoginKeywordPage, { generateMetadata } from './new-season-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaLoginKeywordPage />;
}
