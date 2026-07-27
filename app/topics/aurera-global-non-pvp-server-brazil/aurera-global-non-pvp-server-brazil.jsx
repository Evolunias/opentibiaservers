import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-brazil');
}

export default function AureraGlobalNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-brazil" />;
}
