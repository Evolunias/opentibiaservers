import RealMapShadowcoresRulesKeywordPage, { generateMetadata } from './real-map-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresRulesKeywordPage />;
}
