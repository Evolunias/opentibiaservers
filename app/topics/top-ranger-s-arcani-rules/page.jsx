import TopRangerSArcaniRulesKeywordPage, { generateMetadata } from './top-ranger-s-arcani-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRangerSArcaniRulesKeywordPage />;
}
