import BestRuthlessChaosRulesKeywordPage, { generateMetadata } from './best-ruthless-chaos-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRuthlessChaosRulesKeywordPage />;
}
