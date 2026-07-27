import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-usa');
}

export default function RealMapLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-usa" />;
}
