import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-poland');
}

export default function CustomMapLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-poland" />;
}
