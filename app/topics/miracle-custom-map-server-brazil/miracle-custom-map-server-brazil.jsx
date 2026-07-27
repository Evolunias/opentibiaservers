import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-brazil');
}

export default function MiracleCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-brazil" />;
}
