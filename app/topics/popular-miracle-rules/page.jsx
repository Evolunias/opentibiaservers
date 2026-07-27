import PopularMiracleRulesKeywordPage, { generateMetadata } from './popular-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleRulesKeywordPage />;
}
