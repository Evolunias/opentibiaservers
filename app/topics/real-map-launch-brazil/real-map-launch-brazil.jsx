import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-brazil');
}

export default function RealMapLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-brazil" />;
}
