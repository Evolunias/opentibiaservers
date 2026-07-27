import FreshStartYurotsRulesKeywordPage, { generateMetadata } from './fresh-start-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsRulesKeywordPage />;
}
