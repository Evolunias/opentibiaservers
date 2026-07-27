import BestImperianicRulesKeywordPage, { generateMetadata } from './best-imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicRulesKeywordPage />;
}
