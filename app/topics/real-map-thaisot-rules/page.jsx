import RealMapThaisotRulesKeywordPage, { generateMetadata } from './real-map-thaisot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotRulesKeywordPage />;
}
