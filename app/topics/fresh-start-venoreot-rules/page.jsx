import FreshStartVenoreotRulesKeywordPage, { generateMetadata } from './fresh-start-venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotRulesKeywordPage />;
}
