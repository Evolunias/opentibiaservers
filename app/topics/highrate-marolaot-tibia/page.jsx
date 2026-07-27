import HighrateMarolaotTibiaKeywordPage, { generateMetadata } from './highrate-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMarolaotTibiaKeywordPage />;
}
