import BestAmeriaRulesKeywordPage, { generateMetadata } from './best-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaRulesKeywordPage />;
}
