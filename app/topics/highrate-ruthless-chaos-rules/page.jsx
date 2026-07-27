import HighrateRuthlessChaosRulesKeywordPage, { generateMetadata } from './highrate-ruthless-chaos-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRuthlessChaosRulesKeywordPage />;
}
