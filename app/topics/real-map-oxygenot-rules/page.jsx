import RealMapOxygenotRulesKeywordPage, { generateMetadata } from './real-map-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOxygenotRulesKeywordPage />;
}
