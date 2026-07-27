import ActiveRangerSArcaniRulesKeywordPage, { generateMetadata } from './active-ranger-s-arcani-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRangerSArcaniRulesKeywordPage />;
}
