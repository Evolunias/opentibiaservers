import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-rules');
}

export default function RealMapNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-rules" />;
}
