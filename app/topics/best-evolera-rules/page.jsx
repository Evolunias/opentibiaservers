import BestEvoleraRulesKeywordPage, { generateMetadata } from './best-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraRulesKeywordPage />;
}
