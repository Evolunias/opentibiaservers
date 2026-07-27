import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-uk');
}

export default function CustomMapLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-uk" />;
}
