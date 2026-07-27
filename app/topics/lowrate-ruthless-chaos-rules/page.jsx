import LowrateRuthlessChaosRulesKeywordPage, { generateMetadata } from './lowrate-ruthless-chaos-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRuthlessChaosRulesKeywordPage />;
}
