import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-usa');
}

export default function CustomMapLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-usa" />;
}
