import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-4-pvp-server');
}

export default function AureraGlobal84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-4-pvp-server" />;
}
