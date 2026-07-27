import BestTibiantisRulesKeywordPage, { generateMetadata } from './best-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisRulesKeywordPage />;
}
