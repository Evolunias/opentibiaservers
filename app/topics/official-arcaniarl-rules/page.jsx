import OfficialArcaniarlRulesKeywordPage, { generateMetadata } from './official-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlRulesKeywordPage />;
}
