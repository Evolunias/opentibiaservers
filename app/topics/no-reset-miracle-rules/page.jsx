import NoResetMiracleRulesKeywordPage, { generateMetadata } from './no-reset-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMiracleRulesKeywordPage />;
}
