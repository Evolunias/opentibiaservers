import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-map');
}

export default function UnlineMapKeywordPage() {
  return <StaticKeywordPage slug="unline-map" />;
}
