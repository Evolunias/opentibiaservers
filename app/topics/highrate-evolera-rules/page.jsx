import HighrateEvoleraRulesKeywordPage, { generateMetadata } from './highrate-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraRulesKeywordPage />;
}
