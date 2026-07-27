import BestMiracleRulesKeywordPage, { generateMetadata } from './best-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleRulesKeywordPage />;
}
