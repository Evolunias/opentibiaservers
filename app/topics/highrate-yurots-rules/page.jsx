import HighrateYurotsRulesKeywordPage, { generateMetadata } from './highrate-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsRulesKeywordPage />;
}
