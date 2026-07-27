import RealMapVenoreotRulesKeywordPage, { generateMetadata } from './real-map-venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotRulesKeywordPage />;
}
