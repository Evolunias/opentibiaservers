import MarolaotRulesKeywordPage, { generateMetadata } from './marolaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotRulesKeywordPage />;
}
