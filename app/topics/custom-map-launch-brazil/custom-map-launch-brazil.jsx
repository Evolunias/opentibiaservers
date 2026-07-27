import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-brazil');
}

export default function CustomMapLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-brazil" />;
}
