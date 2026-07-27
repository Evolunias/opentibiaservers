import HighrateUnlineRulesKeywordPage, { generateMetadata } from './highrate-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineRulesKeywordPage />;
}
