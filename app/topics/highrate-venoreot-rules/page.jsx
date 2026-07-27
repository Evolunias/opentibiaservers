import HighrateVenoreotRulesKeywordPage, { generateMetadata } from './highrate-venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotRulesKeywordPage />;
}
