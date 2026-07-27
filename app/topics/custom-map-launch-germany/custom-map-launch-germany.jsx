import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-germany');
}

export default function CustomMapLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-germany" />;
}
