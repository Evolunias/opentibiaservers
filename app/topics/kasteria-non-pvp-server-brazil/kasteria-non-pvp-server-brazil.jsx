import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-non-pvp-server-brazil');
}

export default function KasteriaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-non-pvp-server-brazil" />;
}
