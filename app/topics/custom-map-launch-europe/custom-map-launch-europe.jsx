import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-europe');
}

export default function CustomMapLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-europe" />;
}
