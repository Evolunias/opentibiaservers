import CustomMiracleRulesKeywordPage, { generateMetadata } from './custom-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleRulesKeywordPage />;
}
