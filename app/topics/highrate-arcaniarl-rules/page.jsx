import HighrateArcaniarlRulesKeywordPage, { generateMetadata } from './highrate-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlRulesKeywordPage />;
}
