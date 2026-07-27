import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-brazil');
}

export default function AureraGlobalPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-brazil" />;
}
