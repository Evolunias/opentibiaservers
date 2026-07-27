import BestMarolaotRulesKeywordPage, { generateMetadata } from './best-marolaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMarolaotRulesKeywordPage />;
}
