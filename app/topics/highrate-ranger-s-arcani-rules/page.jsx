import HighrateRangerSArcaniRulesKeywordPage, { generateMetadata } from './highrate-ranger-s-arcani-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRangerSArcaniRulesKeywordPage />;
}
