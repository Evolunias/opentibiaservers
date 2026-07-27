import LowrateArcaniarlRulesKeywordPage, { generateMetadata } from './lowrate-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlRulesKeywordPage />;
}
