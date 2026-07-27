import LowrateVenoreotRulesKeywordPage, { generateMetadata } from './lowrate-venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotRulesKeywordPage />;
}
