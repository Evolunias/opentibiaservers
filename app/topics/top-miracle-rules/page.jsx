import TopMiracleRulesKeywordPage, { generateMetadata } from './top-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMiracleRulesKeywordPage />;
}
