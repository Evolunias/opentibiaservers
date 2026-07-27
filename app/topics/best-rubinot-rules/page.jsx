import BestRubinotRulesKeywordPage, { generateMetadata } from './best-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotRulesKeywordPage />;
}
