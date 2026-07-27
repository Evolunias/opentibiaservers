import NewSeasonMarolaotOtsKeywordPage, { generateMetadata } from './new-season-marolaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMarolaotOtsKeywordPage />;
}
