import RealMapTibiameRulesKeywordPage, { generateMetadata } from './real-map-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiameRulesKeywordPage />;
}
