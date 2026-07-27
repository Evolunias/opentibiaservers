import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-rules');
}

export default function RealMapMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-rules" />;
}
