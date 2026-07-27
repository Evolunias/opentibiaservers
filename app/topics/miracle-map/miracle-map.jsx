import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-map');
}

export default function MiracleMapKeywordPage() {
  return <StaticKeywordPage slug="miracle-map" />;
}
