import NewSeasonMarolaotKeywordPage, { generateMetadata } from './new-season-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMarolaotKeywordPage />;
}
