import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map');
}

export default function UnlineRealMapKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map" />;
}
