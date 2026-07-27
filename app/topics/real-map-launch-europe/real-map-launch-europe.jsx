import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-europe');
}

export default function RealMapLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-europe" />;
}
