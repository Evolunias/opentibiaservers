import BestArcaniarlRulesKeywordPage, { generateMetadata } from './best-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlRulesKeywordPage />;
}
