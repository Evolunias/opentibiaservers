import NewSeasonMarolaotTibiaKeywordPage, { generateMetadata } from './new-season-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMarolaotTibiaKeywordPage />;
}
