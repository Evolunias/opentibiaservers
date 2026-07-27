import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-germany');
}

export default function RealMapLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-germany" />;
}
