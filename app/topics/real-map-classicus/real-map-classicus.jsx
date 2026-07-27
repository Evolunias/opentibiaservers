import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus');
}

export default function RealMapClassicusKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus" />;
}
