import NewSeasonMarolaotGuideKeywordPage, { generateMetadata } from './new-season-marolaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMarolaotGuideKeywordPage />;
}
