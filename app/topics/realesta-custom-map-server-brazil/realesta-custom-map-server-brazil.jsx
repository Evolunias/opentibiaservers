import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-brazil');
}

export default function RealestaCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-brazil" />;
}
