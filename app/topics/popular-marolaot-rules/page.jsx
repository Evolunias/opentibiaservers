import PopularMarolaotRulesKeywordPage, { generateMetadata } from './popular-marolaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotRulesKeywordPage />;
}
