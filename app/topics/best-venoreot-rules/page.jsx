import BestVenoreotRulesKeywordPage, { generateMetadata } from './best-venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotRulesKeywordPage />;
}
