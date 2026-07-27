import NewRuthlessChaosRulesKeywordPage, { generateMetadata } from './new-ruthless-chaos-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRuthlessChaosRulesKeywordPage />;
}
