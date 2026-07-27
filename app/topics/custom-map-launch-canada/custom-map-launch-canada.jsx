import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-canada');
}

export default function CustomMapLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-canada" />;
}
