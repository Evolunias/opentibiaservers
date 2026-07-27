import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-rules');
}

export default function RealMapTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-rules" />;
}
