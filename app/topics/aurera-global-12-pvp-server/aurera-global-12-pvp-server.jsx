import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-pvp-server');
}

export default function AureraGlobal12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-pvp-server" />;
}
