import HighrateAlasteraRulesKeywordPage, { generateMetadata } from './highrate-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraRulesKeywordPage />;
}
