import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-brazil');
}

export default function OxygenotCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-brazil" />;
}
