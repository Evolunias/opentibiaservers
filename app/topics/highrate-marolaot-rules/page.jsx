import HighrateMarolaotRulesKeywordPage, { generateMetadata } from './highrate-marolaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMarolaotRulesKeywordPage />;
}
