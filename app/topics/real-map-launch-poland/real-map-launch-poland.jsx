import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-poland');
}

export default function RealMapLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-poland" />;
}
