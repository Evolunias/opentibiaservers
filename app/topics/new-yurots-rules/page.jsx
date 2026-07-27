import NewYurotsRulesKeywordPage, { generateMetadata } from './new-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsRulesKeywordPage />;
}
