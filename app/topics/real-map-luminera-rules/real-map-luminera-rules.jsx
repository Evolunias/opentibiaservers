import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-rules');
}

export default function RealMapLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-rules" />;
}
