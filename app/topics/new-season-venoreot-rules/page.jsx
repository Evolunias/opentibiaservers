import NewSeasonVenoreotRulesKeywordPage, { generateMetadata } from './new-season-venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotRulesKeywordPage />;
}
