import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-pvp-server');
}

export default function AureraGlobal14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-pvp-server" />;
}
