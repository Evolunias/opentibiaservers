import OfficialMiracleRulesKeywordPage, { generateMetadata } from './official-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleRulesKeywordPage />;
}
