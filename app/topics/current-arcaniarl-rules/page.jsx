import CurrentArcaniarlRulesKeywordPage, { generateMetadata } from './current-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlRulesKeywordPage />;
}
