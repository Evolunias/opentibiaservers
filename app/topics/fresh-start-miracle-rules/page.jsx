import FreshStartMiracleRulesKeywordPage, { generateMetadata } from './fresh-start-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMiracleRulesKeywordPage />;
}
