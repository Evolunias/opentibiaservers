import HighrateElderaRulesKeywordPage, { generateMetadata } from './highrate-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaRulesKeywordPage />;
}
