import HighrateMarolaotGuideKeywordPage, { generateMetadata } from './highrate-marolaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMarolaotGuideKeywordPage />;
}
