import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-uk');
}

export default function RealMapLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-uk" />;
}
