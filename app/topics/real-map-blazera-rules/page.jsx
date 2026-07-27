import RealMapBlazeraRulesKeywordPage, { generateMetadata } from './real-map-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraRulesKeywordPage />;
}
