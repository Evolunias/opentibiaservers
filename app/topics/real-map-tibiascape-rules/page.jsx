import RealMapTibiascapeRulesKeywordPage, { generateMetadata } from './real-map-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeRulesKeywordPage />;
}
