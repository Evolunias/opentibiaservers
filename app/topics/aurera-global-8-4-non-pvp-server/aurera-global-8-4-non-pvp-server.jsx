import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-4-non-pvp-server');
}

export default function AureraGlobal84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-4-non-pvp-server" />;
}
