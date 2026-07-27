import BestTibijkaRulesKeywordPage, { generateMetadata } from './best-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaRulesKeywordPage />;
}
