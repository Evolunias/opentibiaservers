import BestTibiascapeRulesKeywordPage, { generateMetadata } from './best-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeRulesKeywordPage />;
}
