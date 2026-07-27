import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-north-america');
}

export default function CustomMapLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-north-america" />;
}
