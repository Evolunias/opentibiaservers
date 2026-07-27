import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-rules');
}

export default function RealMapDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-rules" />;
}
