import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-brazil');
}

export default function KasteriaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-brazil" />;
}
