import MiracleRulesKeywordPage, { generateMetadata } from './miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleRulesKeywordPage />;
}
