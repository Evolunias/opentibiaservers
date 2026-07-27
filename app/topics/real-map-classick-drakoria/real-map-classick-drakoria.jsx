import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria');
}

export default function RealMapClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria" />;
}
