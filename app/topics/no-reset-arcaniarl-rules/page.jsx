import NoResetArcaniarlRulesKeywordPage, { generateMetadata } from './no-reset-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArcaniarlRulesKeywordPage />;
}
