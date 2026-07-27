import BestRangerSArcaniRulesKeywordPage, { generateMetadata } from './best-ranger-s-arcani-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRangerSArcaniRulesKeywordPage />;
}
