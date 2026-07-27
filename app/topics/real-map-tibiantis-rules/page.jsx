import RealMapTibiantisRulesKeywordPage, { generateMetadata } from './real-map-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiantisRulesKeywordPage />;
}
