import RealMapCanobRulesKeywordPage, { generateMetadata } from './real-map-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobRulesKeywordPage />;
}
