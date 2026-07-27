import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia');
}

export default function RealMapThorniaKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia" />;
}
