import HighrateOlderaRulesKeywordPage, { generateMetadata } from './highrate-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOlderaRulesKeywordPage />;
}
