import TopMarolaotRulesKeywordPage, { generateMetadata } from './top-marolaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotRulesKeywordPage />;
}
