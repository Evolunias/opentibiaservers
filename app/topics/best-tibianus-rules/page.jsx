import BestTibianusRulesKeywordPage, { generateMetadata } from './best-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusRulesKeywordPage />;
}
