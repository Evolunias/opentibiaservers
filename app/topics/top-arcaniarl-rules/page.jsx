import TopArcaniarlRulesKeywordPage, { generateMetadata } from './top-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlRulesKeywordPage />;
}
