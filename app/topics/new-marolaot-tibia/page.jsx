import NewMarolaotTibiaKeywordPage, { generateMetadata } from './new-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotTibiaKeywordPage />;
}
