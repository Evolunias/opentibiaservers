import HighrateMiracleRulesKeywordPage, { generateMetadata } from './highrate-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleRulesKeywordPage />;
}
