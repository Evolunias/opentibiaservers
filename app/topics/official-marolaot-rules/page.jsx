import OfficialMarolaotRulesKeywordPage, { generateMetadata } from './official-marolaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotRulesKeywordPage />;
}
