import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-rules');
}

export default function RealMapSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-rules" />;
}
