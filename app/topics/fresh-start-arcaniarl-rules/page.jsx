import FreshStartArcaniarlRulesKeywordPage, { generateMetadata } from './fresh-start-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlRulesKeywordPage />;
}
