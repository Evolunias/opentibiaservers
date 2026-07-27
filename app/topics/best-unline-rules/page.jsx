import BestUnlineRulesKeywordPage, { generateMetadata } from './best-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineRulesKeywordPage />;
}
