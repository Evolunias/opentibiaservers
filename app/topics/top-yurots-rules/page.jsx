import TopYurotsRulesKeywordPage, { generateMetadata } from './top-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsRulesKeywordPage />;
}
