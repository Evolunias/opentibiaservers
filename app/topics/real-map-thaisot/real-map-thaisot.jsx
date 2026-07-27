import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot');
}

export default function RealMapThaisotKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot" />;
}
