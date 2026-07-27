import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-canada');
}

export default function RealMapLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-canada" />;
}
