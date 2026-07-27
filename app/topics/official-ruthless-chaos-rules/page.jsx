import OfficialRuthlessChaosRulesKeywordPage, { generateMetadata } from './official-ruthless-chaos-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosRulesKeywordPage />;
}
