import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-pvp-server');
}

export default function AureraGlobal15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-pvp-server" />;
}
