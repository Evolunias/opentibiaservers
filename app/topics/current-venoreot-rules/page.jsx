import CurrentVenoreotRulesKeywordPage, { generateMetadata } from './current-venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotRulesKeywordPage />;
}
