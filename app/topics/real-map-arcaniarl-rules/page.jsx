import RealMapArcaniarlRulesKeywordPage, { generateMetadata } from './real-map-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlRulesKeywordPage />;
}
