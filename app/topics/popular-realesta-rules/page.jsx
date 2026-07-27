import PopularRealestaRulesKeywordPage, { generateMetadata } from './popular-realesta-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaRulesKeywordPage />;
}
