import ActiveArcaniarlRulesKeywordPage, { generateMetadata } from './active-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlRulesKeywordPage />;
}
