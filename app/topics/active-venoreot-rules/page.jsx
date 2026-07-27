import ActiveVenoreotRulesKeywordPage, { generateMetadata } from './active-venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotRulesKeywordPage />;
}
