import ActiveMarolaotRulesKeywordPage, { generateMetadata } from './active-marolaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMarolaotRulesKeywordPage />;
}
