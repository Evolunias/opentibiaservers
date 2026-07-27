import BestCoxaotRulesKeywordPage, { generateMetadata } from './best-coxaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotRulesKeywordPage />;
}
