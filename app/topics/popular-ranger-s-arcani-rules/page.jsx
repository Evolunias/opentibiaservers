import PopularRangerSArcaniRulesKeywordPage, { generateMetadata } from './popular-ranger-s-arcani-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRangerSArcaniRulesKeywordPage />;
}
