import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-north-america');
}

export default function RealMapLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-north-america" />;
}
