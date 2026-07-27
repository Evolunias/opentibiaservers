import RealMapOlderaRulesKeywordPage, { generateMetadata } from './real-map-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaRulesKeywordPage />;
}
