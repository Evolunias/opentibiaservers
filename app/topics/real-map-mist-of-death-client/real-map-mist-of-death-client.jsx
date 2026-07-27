import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-client');
}

export default function RealMapMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-client" />;
}
