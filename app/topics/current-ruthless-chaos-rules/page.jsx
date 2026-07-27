import CurrentRuthlessChaosRulesKeywordPage, { generateMetadata } from './current-ruthless-chaos-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRuthlessChaosRulesKeywordPage />;
}
