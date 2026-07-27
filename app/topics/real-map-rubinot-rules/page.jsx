import RealMapRubinotRulesKeywordPage, { generateMetadata } from './real-map-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotRulesKeywordPage />;
}
