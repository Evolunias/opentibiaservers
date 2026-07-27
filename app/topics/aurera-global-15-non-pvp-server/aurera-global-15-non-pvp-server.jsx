import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-non-pvp-server');
}

export default function AureraGlobal15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-non-pvp-server" />;
}
