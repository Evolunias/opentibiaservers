import RealMapImperianicRulesKeywordPage, { generateMetadata } from './real-map-imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicRulesKeywordPage />;
}
