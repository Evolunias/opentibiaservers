import RealMapYurotsRulesKeywordPage, { generateMetadata } from './real-map-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsRulesKeywordPage />;
}
