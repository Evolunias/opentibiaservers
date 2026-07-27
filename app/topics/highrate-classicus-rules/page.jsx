import HighrateClassicusRulesKeywordPage, { generateMetadata } from './highrate-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusRulesKeywordPage />;
}
