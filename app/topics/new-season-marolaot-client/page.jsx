import NewSeasonMarolaotClientKeywordPage, { generateMetadata } from './new-season-marolaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMarolaotClientKeywordPage />;
}
