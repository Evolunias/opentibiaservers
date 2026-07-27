import BestOxygenotRulesKeywordPage, { generateMetadata } from './best-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOxygenotRulesKeywordPage />;
}
