import PopularArcaniarlRulesKeywordPage, { generateMetadata } from './popular-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlRulesKeywordPage />;
}
